/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

const DASHBOARD_API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://103.110.87.227:3000';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return proxyRequest(request, params, 'GET');
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return proxyRequest(request, params, 'POST');
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return proxyRequest(request, params, 'PUT');
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return proxyRequest(request, params, 'DELETE');
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  return proxyRequest(request, params, 'PATCH');
}

async function proxyRequest(
  request: NextRequest,
  params: Promise<{ path: string[] }>,
  method: string
) {
  try {
    // ✅ FIX 1: Await params
    const { path } = await params;
    const apiPath = path.join('/');
    
    // ✅ FIX 2: Không thêm /api nếu path đã bắt đầu bằng 'api'
    // /api/proxy/representatives → http://103.110.87.227:3000/api/representatives
    // /api/proxy/api/representatives → http://103.110.87.227:3000/api/representatives
    const cleanPath = apiPath.startsWith('api/') ? apiPath.substring(4) : apiPath;
    const targetUrl = `${DASHBOARD_API_URL}/api/${cleanPath}`;
    
    // Get request body (for POST, PUT, PATCH)
    let body = undefined;
    if (['POST', 'PUT', 'PATCH'].includes(method)) {
      try {
        body = await request.json();
      } catch {
        // No body or invalid JSON
      }
    }
    
    // Get query params
    const searchParams = request.nextUrl.searchParams;
    const queryString = searchParams.toString();
    const fullUrl = queryString ? `${targetUrl}?${queryString}` : targetUrl;
    
    console.log(`[Proxy] ${method} ${fullUrl}`);
    
    // Forward request to dashboard API
    const response = await fetch(fullUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        // Forward cookies if needed
        ...(request.headers.get('cookie') && {
          Cookie: request.headers.get('cookie')!,
        }),
      },
      body: body ? JSON.stringify(body) : undefined,
      cache: 'no-store', // Disable caching
    });
    
    // Get response body
    const data = await response.text();
    let jsonData;
    try {
      jsonData = JSON.parse(data);
    } catch {
      jsonData = data;
    }
    
    console.log(`[Proxy] Response status: ${response.status}`);
    
    // Return response
    return NextResponse.json(jsonData, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error: any) {
    console.error('[Proxy] Error:', error.message);
    
    return NextResponse.json(
      { 
        error: 'Proxy request failed', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}