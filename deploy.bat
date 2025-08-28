@echo off
echo 🚀 Starting deployment process for Sharon Anto Portfolio...

REM Step 1: Install dependencies
echo 📦 Installing dependencies...
call npm install
if %ERRORLEVEL% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

REM Step 2: Create production build
echo 🔨 Building production version...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo ❌ Build failed. Please check your code for errors.
    pause
    exit /b 1
)

echo ✅ Build successful!

REM Step 3: Deploy to Vercel
echo 🚀 Deploying to Vercel...
call vercel --prod
if %ERRORLEVEL% neq 0 (
    echo ❌ Deployment failed. Please check your Vercel configuration.
    echo 💡 Make sure you have Vercel CLI installed: npm install -g vercel
    pause
    exit /b 1
)

echo 🎉 Deployment successful!
echo 📝 Your portfolio is now live!
echo 📄 Resume PDF: Available at /resume(sharon).pdf
echo 🖼️  Images: All project images are properly deployed
echo 📱 Responsive: Optimized for all devices
echo ✨ Deployment process completed!

pause
