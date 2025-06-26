# GitHub Actions Workflows

This repository includes automated GitHub Actions workflows to streamline development, testing, and deployment processes. All workflows are designed to work with the Launchpad Nexus MVP template.

## 🚀 Available Workflows

### 1. Deploy to Vercel (`deploy.yml`)

**Trigger**: Push to `main` branch or Pull Request
**Purpose**: Automated testing and deployment to Vercel

**What it does**:
- ✅ Runs TypeScript checks
- ✅ Builds the project
- ✅ Executes accessibility tests
- ✅ Runs E2E tests with Playwright
- ✅ Uploads test reports as artifacts
- ✅ Deploys to Vercel (main branch only)

**Required Secrets**:
- `VERCEL_TOKEN` - Your Vercel authentication token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

**Setup Instructions**:
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Create a new project or link existing one
3. Get your tokens from Account Settings → Tokens
4. Add secrets in GitHub Settings → Secrets and variables → Actions

### 2. Client Setup Automation (`client-setup.yml`)

**Trigger**: Manual workflow dispatch
**Purpose**: Automatically customize template for new clients

**What it does**:
- 🎯 Creates a new branch for client customization
- 🔄 Replaces all `[CLIENT_NAME]` placeholders
- 📝 Updates documentation and source code
- 🔨 Builds project to verify changes
- 📋 Creates a Pull Request with summary

**Input Parameters**:
- `client_name` (required) - Company/product name
- `client_email` (required) - Contact email address
- `client_domain` (required) - Website domain
- `client_phone` (optional) - Phone number
- `client_address` (optional) - Business address

**How to Use**:
1. Go to Actions tab in GitHub
2. Select "Client Setup Automation"
3. Click "Run workflow"
4. Fill in client information
5. Review and merge the generated PR

### 3. Quality Assurance (`quality-assurance.yml`)

**Trigger**: Pull Requests, Push to main, Weekly schedule (Mondays 9 AM UTC)
**Purpose**: Comprehensive quality checks and security audits

**What it does**:
- 🔍 **Lint & TypeCheck**: ESLint and TypeScript validation
- ♿ **Accessibility Audit**: WCAG compliance testing
- 🔦 **Lighthouse Audit**: Performance and SEO scoring
- 🛡️ **Security Scan**: npm audit and CodeQL analysis
- 📦 **Dependency Review**: Check for vulnerable dependencies

**Reports Generated**:
- Accessibility reports (30-day retention)
- Lighthouse performance scores
- Security vulnerability reports
- Code quality metrics

## 📋 Workflow Setup Checklist

### For Data Science Tech (Template Maintenance)

- [ ] All workflows are committed to the template repository
- [ ] Workflows are tested and working
- [ ] Documentation is up to date
- [ ] Example secrets are documented

### For Clients (Using the Template)

#### 1. Initial Setup
- [ ] Create new repository using "Use this template"
- [ ] Clone repository locally
- [ ] Run `npm install` to verify dependencies

#### 2. Vercel Deployment Setup
- [ ] Create Vercel account if needed
- [ ] Import GitHub repository to Vercel
- [ ] Get Vercel credentials:
  - [ ] `VERCEL_TOKEN`
  - [ ] `VERCEL_ORG_ID`
  - [ ] `VERCEL_PROJECT_ID`
- [ ] Add secrets to GitHub repository

#### 3. Client Customization
- [ ] Use "Client Setup Automation" workflow OR
- [ ] Manually follow [CLIENT_SETUP.md](./CLIENT_SETUP.md)
- [ ] Review generated changes
- [ ] Merge customization PR

#### 4. Optional Enhancements
- [ ] Enable branch protection rules
- [ ] Set up additional deployment environments
- [ ] Configure custom domain in Vercel
- [ ] Add environment variables for analytics

## 🔧 Manual Commands

If you prefer to run tasks manually instead of using workflows:

```bash
# Development
npm run dev              # Start development server
npm run build           # Production build
npm run preview         # Preview production build

# Testing
npm run test            # Run all tests
npm run test:accessibility # Accessibility tests only
npm run test:ui         # Interactive test runner

# Quality Checks
npm run lint            # ESLint checks
npm run typecheck       # TypeScript validation
npm run format          # Prettier formatting

# Deployment
npm run deploy:vercel   # Manual Vercel deployment
```

## 🐛 Troubleshooting

### Common Issues

**Build Failures**:
- Ensure Node.js 20+ is being used
- Check for TypeScript errors: `npm run typecheck`
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

**Test Failures**:
- Playwright browser installation: `npx playwright install`
- Check test configuration in `playwright.config.ts`
- Review test reports in workflow artifacts

**Deployment Issues**:
- Verify Vercel secrets are correct
- Check Vercel project settings
- Ensure build completes successfully first

**Secret Management**:
- Never commit secrets to repository
- Use GitHub Secrets for sensitive values
- Reference secrets in workflow files only

### Getting Help

1. **Template Issues**: Contact Data Science Tech (info@datasciencetech.ca)
2. **Workflow Issues**: Check GitHub Actions logs
3. **Deployment Issues**: Check Vercel dashboard logs
4. **General Questions**: Review [CLAUDE.md](./CLAUDE.md) for full context

## 🔄 Workflow Maintenance

### For Data Science Tech

**Monthly Tasks**:
- Review workflow performance
- Update Node.js versions if needed
- Check for deprecated actions
- Update documentation

**When Adding Features**:
- Update relevant workflows
- Test changes in a fork first
- Update this documentation
- Inform clients of changes

### For Clients

**Regular Tasks**:
- Monitor workflow success/failure
- Review security scan results
- Keep dependencies updated
- Follow accessibility recommendations

---

**Last Updated**: December 2024  
**Maintained by**: Data Science Tech (info@datasciencetech.ca)
