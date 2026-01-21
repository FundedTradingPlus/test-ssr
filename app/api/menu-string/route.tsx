import { NextResponse } from 'next/server';
import NavigationStatic from '@/app/components/NavigationStatic';

export async function GET() {
  try {
    // Dynamically import renderToString to avoid build-time issues
    const { renderToString } = await import('react-dom/server');
    
    // Render the Navigation component to an HTML string
    const navigationHTML = renderToString(<NavigationStatic />);
    
    return NextResponse.json({
      success: true,
      html: navigationHTML,
      length: navigationHTML.length,
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to render navigation' 
      },
      { status: 500 }
    );
  }
}
