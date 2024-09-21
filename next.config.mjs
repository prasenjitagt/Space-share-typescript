/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "source.unsplash.com"
            },
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            },

        ],
    },
    env: {
        GMAP_API: 'AIzaSyDXMTDRzxaB16fnPvXYKbZlSmU3lPPlWm8'
    }
};

export default nextConfig;
