#!/bin/bash

# 🏷️ Client Template Customization Script
# Created by Data Science Tech (info@datasciencetech.ca)
# This script helps quickly customize the template for new clients

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${BLUE}=================================================${NC}"
    echo -e "${BLUE}🏷️  Data Science Tech - Client Setup${NC}"
    echo -e "${BLUE}=================================================${NC}"
    echo ""
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Collect client information
collect_client_info() {
    echo -e "${BLUE}📝 Client Information Collection${NC}"
    echo ""
    
    read -p "Client/Company Name: " CLIENT_NAME
    read -p "Client Domain (without https://): " CLIENT_DOMAIN
    read -p "Client Email: " CLIENT_EMAIL
    read -p "Client Phone: " CLIENT_PHONE
    read -p "Client Address (one line): " CLIENT_ADDRESS
    
    echo ""
    echo -e "${YELLOW}Please confirm the information:${NC}"
    echo "Company Name: $CLIENT_NAME"
    echo "Domain: $CLIENT_DOMAIN"
    echo "Email: $CLIENT_EMAIL"
    echo "Phone: $CLIENT_PHONE"
    echo "Address: $CLIENT_ADDRESS"
    echo ""
    
    read -p "Is this information correct? (y/n): " confirm
    if [[ ! $confirm =~ ^[Yy]$ ]]; then
        echo "Please run the script again with correct information."
        exit 1
    fi
}

# Replace placeholders in files
customize_template() {
    echo -e "${BLUE}🔄 Customizing template files...${NC}"
    
    # Files to customize
    local files=(
        "index.html"
        "src/components/Header.tsx"
        "src/components/Footer.tsx"
        "src/pages/PrivacyPolicy.tsx"
        "public/locales/en/common.json"
        "public/locales/es/common.json"
        "public/locales/fr/common.json"
    )
    
    for file in "${files[@]}"; do
        if [ -f "$file" ]; then
            echo "Customizing $file..."
            
            # Replace placeholders with client information
            sed -i "s/\[CLIENT_NAME\]/$CLIENT_NAME/g" "$file"
            sed -i "s/\[CLIENT_DOMAIN\]/$CLIENT_DOMAIN/g" "$file"
            sed -i "s/\[CLIENT_EMAIL\]/$CLIENT_EMAIL/g" "$file"
            sed -i "s/\[CLIENT_PHONE\]/$CLIENT_PHONE/g" "$file"
            sed -i "s/\[CLIENT_ADDRESS\]/$CLIENT_ADDRESS/g" "$file"
            
            print_success "Updated $file"
        else
            print_warning "File not found: $file"
        fi
    done
}

# Create client-specific README
create_client_readme() {
    echo -e "${BLUE}📖 Creating client-specific README...${NC}"
    
    cat > "CLIENT_README.md" << EOF
# $CLIENT_NAME - Website

## Project Information
- **Client**: $CLIENT_NAME
- **Domain**: https://$CLIENT_DOMAIN
- **Email**: $CLIENT_EMAIL
- **Phone**: $CLIENT_PHONE

## Quick Start
\`\`\`bash
npm install
npm run dev
\`\`\`

## Deployment
\`\`\`bash
npm run build
\`\`\`

## Support
For technical support, contact [Data Science Tech](mailto:info@datasciencetech.ca)

---
*Professional website created by [Data Science Tech](mailto:info@datasciencetech.ca)*
EOF
    
    print_success "Created CLIENT_README.md"
}

# Update package.json with client info
update_package_json() {
    echo -e "${BLUE}📦 Updating package.json...${NC}"
    
    # Create a temporary file with updated package.json
    local client_name_slug=$(echo "$CLIENT_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g')
    
    # Update package.json name and description
    sed -i "s/\"name\": \"launchpad-nexus-template\"/\"name\": \"$client_name_slug-website\"/" package.json
    sed -i "s/\"description\": \"A production-ready MVP landing page template.*\"/\"description\": \"Professional website for $CLIENT_NAME\"/" package.json
    
    print_success "Updated package.json"
}

# Setup environment file
setup_environment() {
    echo -e "${BLUE}🔧 Setting up environment file...${NC}"
    
    if [ ! -f ".env.local" ]; then
        cp .env.example .env.local
        print_success "Created .env.local from template"
        print_warning "Remember to configure analytics and monitoring settings in .env.local"
    else
        print_warning ".env.local already exists"
    fi
}

# Install dependencies and test
install_and_test() {
    echo -e "${BLUE}📦 Installing dependencies...${NC}"
    
    npm install
    print_success "Dependencies installed"
    
    echo -e "${BLUE}🧪 Running build test...${NC}"
    npm run build
    print_success "Build test successful"
}

# Main execution
main() {
    print_header
    
    echo "This script will customize the template for your client."
    echo "Make sure you're in the project root directory."
    echo ""
    
    collect_client_info
    customize_template
    create_client_readme
    update_package_json
    setup_environment
    install_and_test
    
    echo ""
    print_success "🎉 Template customization completed!"
    echo ""
    echo -e "${BLUE}Next steps:${NC}"
    echo "1. Review the customized files"
    echo "2. Update content in public/locales/en/common.json"
    echo "3. Add client's logo and images"
    echo "4. Configure analytics in .env.local"
    echo "5. Test the website: npm run dev"
    echo "6. Deploy: npm run deploy:vercel or npm run deploy:netlify"
    echo ""
    echo -e "${GREEN}Template ready for $CLIENT_NAME! 🚀${NC}"
    echo ""
    echo "Created by Data Science Tech (info@datasciencetech.ca)"
}

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "src/App.tsx" ]; then
    print_error "Please run this script from the project root directory"
    exit 1
fi

# Run main function
main
