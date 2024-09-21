import { NextResponse, NextRequest } from 'next/server';

const AuthRoutes = ["/login", "/register"];

type Role = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
    user: [/^\/profile/],
    admin: [/^\/dashboard\/admin/],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

   //  const user = {
   //      name: "Morshed",
   //      token: "sjfdksjfsdk;",
   //      role: "user"
   //  };
    const user = undefined; // Uncomment for testing unauthorized access

    if (!user) {
        if (AuthRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    if (user?.role && roleBasedRoutes[user.role as Role]) {
        const routes = roleBasedRoutes[user.role as Role];

        if (routes.some(route => pathname.match(route))) {
            return NextResponse.next();
        }
    }

    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: ['/login', '/register', '/profile', '/dashboard/admin/:path*'],
};
