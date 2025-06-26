#!/bin/bash

# 🚀 MVP Deployment Script
# This script helps you deploy your MVP landing page quickly

set -e

echo "🚀 Starting MVP deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if required tools are installed
check_requirements() {
    echo "🔍 Checking requirements..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    print_status "Requirements check passed"
}

# Install dependencies
install_dependencies() {
    echo "📦 Installing dependencies..."
    npm install
    print_status "Dependencies installed"
}

# Build the project
build_project() {
    echo "🏗️ Building project..."
    npm run build
    print_status "Project built successfully"
}

# Run tests
run_tests() {
    echo "🧪 Running tests..."
    if npx playwright test --reporter=line; then
        print_status "All tests passed"
    else
        print_warning "Some tests failed, but continuing deployment"
    fi
}

# Check for environment variables
check_env() {
    echo "🔐 Checking environment configuration..."
    
    if [ ! -f ".env.local" ]; then
        print_warning "No .env.local file found"
        echo "📝 Creating .env.local from template..."
        cp .env.example .env.local
        print_warning "Please edit .env.local with your actual values before deploying to production"
    else
        print_status "Environment file found"
    fi
}

# Deploy to Vercel
deploy_vercel() {
    echo "🚀 Deploying to Vercel..."
    
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    print_status "Starting Vercel deployment"
    vercel --prod
    print_status "Deployed to Vercel successfully!"
}

# Deploy to Netlify
deploy_netlify() {
    echo "🚀 Deploying to Netlify..."
    
    if ! command -v netlify &> /dev/null; then
        print_warning "Netlify CLI not found. Installing..."
        npm install -g netlify-cli
    fi
    
    print_status "Starting Netlify deployment"
    netlify deploy --prod --dir=dist
    print_status "Deployed to Netlify successfully!"
}

# Main deployment function
deploy() {
    echo "🎯 Choose deployment target:"
    echo "1) Vercel (Recommended)"
    echo "2) Netlify"
    echo "3) Build only (no deployment)"
    read -p "Enter your choice (1-3): " choice
    
    case $choice in
        1)
            deploy_vercel
            ;;
        2)
            deploy_netlify
            ;;
        3)
            print_status "Build completed. Files are in the 'dist' directory."
            ;;
        *)
            print_error "Invalid choice. Please run the script again."
            exit 1
            ;;
    esac
}

# Main execution
main() {
    echo "🎉 Welcome to MVP Deployment!"
    echo "This script will help you deploy your landing page."
    echo ""
    
    check_requirements
    check_env
    install_dependencies
    build_project
    
    # Ask if user wants to run tests
    read -p "🧪 Do you want to run tests before deployment? (y/n): " run_tests_choice
    if [[ $run_tests_choice =~ ^[Yy]$ ]]; then
        run_tests
    fi
    
    deploy
    
    echo ""
    print_status "🎉 Deployment completed successfully!"
    echo ""
    echo "📋 Post-deployment checklist:"
    echo "  • Test your live site"
    echo "  • Set up custom domain (if needed)"
    echo "  • Configure analytics"
    echo "  • Monitor error logs"
    echo ""
    echo "📚 For more help, check:"
    echo "  • README.md"
    echo "  • CLIENT_SETUP.md"
    echo "  • CUSTOMIZATION.md"
}

# Run main function
main
