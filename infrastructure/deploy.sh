
#!/bin/bash

set -e

# Deployment script for Azure infrastructure
# Usage: ./deploy.sh [bicep|terraform] [environment]

DEPLOYMENT_TYPE=${1:-bicep}
ENVIRONMENT=${2:-dev}

echo "Deploying infrastructure using $DEPLOYMENT_TYPE for $ENVIRONMENT environment..."

case $DEPLOYMENT_TYPE in
  "bicep")
    echo "Deploying with Azure Bicep..."
    
    # Check if Azure CLI is installed
    if ! command -v az &> /dev/null; then
      echo "Azure CLI is not installed. Please install it first."
      exit 1
    fi
    
    # Login check
    if ! az account show &> /dev/null; then
      echo "Please login to Azure CLI first: az login"
      exit 1
    fi
    
    # Create resource group
    RESOURCE_GROUP="business-landing-${ENVIRONMENT}-rg"
    LOCATION="East US"
    
    az group create --name $RESOURCE_GROUP --location "$LOCATION"
    
    # Deploy Bicep template
    az deployment group create \
      --resource-group $RESOURCE_GROUP \
      --template-file bicep/main.bicep \
      --parameters @bicep/parameters.json \
      --parameters appName="business-landing-${ENVIRONMENT}"
    ;;
    
  "terraform")
    echo "Deploying with Terraform..."
    
    # Check if Terraform is installed
    if ! command -v terraform &> /dev/null; then
      echo "Terraform is not installed. Please install it first."
      exit 1
    fi
    
    cd terraform
    
    # Initialize Terraform
    terraform init
    
    # Plan deployment
    terraform plan -var-file="terraform.tfvars" -var="app_name=business-landing-${ENVIRONMENT}"
    
    # Apply deployment
    echo "Do you want to apply these changes? (y/N)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
      terraform apply -var-file="terraform.tfvars" -var="app_name=business-landing-${ENVIRONMENT}" -auto-approve
    else
      echo "Deployment cancelled."
      exit 0
    fi
    ;;
    
  *)
    echo "Invalid deployment type. Use 'bicep' or 'terraform'"
    exit 1
    ;;
esac

echo "Deployment completed successfully!"
