#!/bin/bash

# Sharon Anto Portfolio - Vercel Deployment Script
# This script prepares and deploys the portfolio to Vercel

echo "🚀 Starting deployment process for Sharon Anto Portfolio..."

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 2: Create production build
echo "🔨 Building production version..."
npm run build

# Step 3: Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📊 Build size: $(du -sh build | cut -f1)"
    
    # Step 4: Deploy to Vercel
    echo "🚀 Deploying to Vercel..."
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "📝 Your portfolio is now live!"
        echo "📄 Resume PDF: Available at /resume(sharon).pdf"
        echo "🖼️  Images: All project images are properly deployed"
        echo "📱 Responsive: Optimized for all devices"
    else
        echo "❌ Deployment failed. Please check your Vercel configuration."
    fi
else
    echo "❌ Build failed. Please check your code for errors."
fi

echo "✨ Deployment process completed!"
