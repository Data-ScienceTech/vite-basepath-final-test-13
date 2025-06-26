
variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
  default     = "business-landing-rg"
}

variable "location" {
  description = "Azure region for resources"
  type        = string
  default     = "East US"
}

variable "app_name" {
  description = "Name of the web app"
  type        = string
  default     = "business-landing-app"
}

variable "app_service_plan_sku" {
  description = "SKU for the App Service Plan"
  type        = string
  default     = "B1"
  
  validation {
    condition = contains([
      "F1", "B1", "B2", "S1", "S2", "P1V2", "P2V2"
    ], var.app_service_plan_sku)
    error_message = "The SKU must be one of: F1, B1, B2, S1, S2, P1V2, P2V2."
  }
}

variable "container_registry_server" {
  description = "Container registry server"
  type        = string
  default     = "ghcr.io"
}

variable "container_image_tag" {
  description = "Container image tag"
  type        = string
  default     = "latest"
}

variable "environment_variables" {
  description = "Environment variables for the app"
  type        = map(string)
  default = {
    NODE_ENV = "production"
  }
}
