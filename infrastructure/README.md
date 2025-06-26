
# Infrastructure as Code

This directory contains infrastructure templates for deploying the business landing page application.

## Available Options

### Azure Bicep
- `bicep/main.bicep` - Main Bicep template
- `bicep/parameters.json` - Parameters file

### Terraform
- `terraform/main.tf` - Main Terraform configuration
- `terraform/variables.tf` - Variable definitions
- `terraform/outputs.tf` - Output definitions
- `terraform/terraform.tfvars.example` - Example variables file

## Prerequisites

### For Azure Bicep
- Azure CLI installed and configured
- Appropriate Azure subscription permissions

### For Terraform
- Terraform >= 1.0 installed
- Azure CLI installed and configured (for authentication)

## Deployment

### Quick Deployment
```bash
# Deploy with Bicep (default)
./deploy.sh bicep production

# Deploy with Terraform
./deploy.sh terraform production
```

### Manual Deployment

#### Azure Bicep
```bash
# Create resource group
az group create --name business-landing-rg --location "East US"

# Deploy template
az deployment group create \
  --resource-group business-landing-rg \
  --template-file bicep/main.bicep \
  --parameters @bicep/parameters.json
```

#### Terraform
```bash
cd terraform

# Copy and edit variables
cp terraform.tfvars.example terraform.tfvars

# Initialize
terraform init

# Plan
terraform plan -var-file="terraform.tfvars"

# Apply
terraform apply -var-file="terraform.tfvars"
```

## Configuration

### Environment Variables
Configure these environment variables in your deployment:

- `NODE_ENV` - Application environment (production/staging)
- `VITE_SENTRY_DSN` - Sentry DSN for error tracking
- `VITE_OTLP_ENDPOINT` - OpenTelemetry endpoint
- `VITE_DISABLE_ANALYTICS` - Disable analytics (optional)

### Container Registry
The templates are configured to use GitHub Container Registry (ghcr.io) by default. Update the registry settings in:
- Bicep: `containerRegistryServer` parameter
- Terraform: `container_registry_server` variable

## CI/CD Integration

The GitHub Actions workflow automatically:
1. Builds and tests the Docker image
2. Publishes to multiple registries (GHCR, Docker Hub)
3. Runs security scans with Trivy
4. Can trigger infrastructure deployments

### Required Secrets
Add these secrets to your GitHub repository:

- `DOCKER_USERNAME` - Docker Hub username (optional)
- `DOCKER_PASSWORD` - Docker Hub password (optional)
- `AZURE_CREDENTIALS` - Azure service principal (for Azure deployments)

## Monitoring

The infrastructure includes:
- Application Insights for application monitoring
- Container health checks
- Security scanning with Trivy

## Scaling

To scale the application:
- Modify the `appServicePlanSku` (Bicep) or `app_service_plan_sku` (Terraform)
- Available SKUs: F1 (Free), B1/B2 (Basic), S1/S2 (Standard), P1V2/P2V2 (Premium)

## Cost Optimization

- Use F1 (Free) tier for development
- Use B1/B2 for staging environments
- Use S1+ for production environments with traffic
