# Changelog

All notable changes to Creator Labs will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Enhanced Journey page with interactive agent contributions
  - Added AgentContributions component showing agent involvement at each stage
  - Custom SVG icons for each agent (Seldon, Baley, Dors, Daneel, Giskard, Calvin)
  - Interactive tooltips showing agent roles and responsibilities
  - Visual indicators for active agents with animations
- Custom SVG icons for all agents
  - Replaced Material-UI icons with custom-designed SVG icons
  - Each icon represents the agent's specific role and capabilities
  - Consistent styling with the overall design system
- Initial project setup
- Created CHANGELOG.md to track all future changes
- Interactive particle background effects across pages
  - Added reusable ParticleBackground component with three variants (default, dense, sparse)
  - Implemented particle effects on Home, Solutions, Features, and Agents pages
  - Each page uses optimized particle density for its content
  - Performance optimized with intersection observer
- Enhanced mobile responsiveness across admin pages
  - Implemented responsive drawer navigation in AdminLayout
  - Added mobile-optimized grid layouts for Dashboard, User Management, and System Settings
  - Enhanced table and card views for better mobile experience
  - Optimized notification and menu interfaces for touch devices

### Changed
- Updated Agents page styling
  - Fixed TypeScript interfaces for styled components
  - Improved animations and transitions
  - Enhanced visual hierarchy
- Improved Navbar component
  - Fixed TypeScript issues with styled components
  - Enhanced mobile menu functionality
  - Optimized component styling
- Enhanced AdminLayout for better mobile experience
  - Changed drawer to temporary mode on mobile devices
  - Improved header and menu responsiveness
  - Optimized spacing and typography for mobile screens
- Improved Home page layout and theme support
  - Simplified page structure for better particle visibility
  - Added theme-aware styling for light/dark modes
  - Enhanced typography and spacing consistency
  - Improved component organization and readability

### Deprecated
- N/A

### Removed
- Material-UI icons from Agents page in favor of custom SVG icons
- N/A

### Fixed
- TypeScript issues in Navbar and Agents components
- Mobile menu styling and functionality
- Agent card animations and transitions
- N/A

### Security
- N/A

## [1.0.0] - 2024-12-09
### Added
- Initial Java Spring Boot backend implementation
- Authentication system with JWT support
- Role-based access control (USER, CREATOR, SUPERADMIN)
- Email verification system
- Password reset functionality
- Session management
- Rate limiting protection
- Comprehensive error handling

#### Authentication & Authorization
- JWT-based authentication with 7-day token expiry
- Role-based middleware for protected routes
- Session tracking with device info and IP address
- Multi-device session support
- Automatic session cleanup for expired sessions

#### User Management
- User registration with email verification
- Password reset with secure tokens
- User profile management
- Company and team associations
- Super admin user management interface

#### Security Features
- BCrypt password hashing
- Rate limiting per IP and endpoint
- CORS protection
- XSS protection headers
- CSRF protection
- Input validation and sanitization
- Session fixation protection

#### Email System
- Email verification on signup
- Password reset emails
- HTML and text email templates
- SMTP configuration
- Email queue system

#### Database
- PostgreSQL integration
- Entity relationships:
  - User to Company (Many-to-One)
  - User to Team (Many-to-One)
  - User to Sessions (One-to-Many)
  - Company to Teams (One-to-Many)

#### API Endpoints
- Authentication routes:
  - POST /api/auth/login
  - POST /api/auth/signup
  - POST /api/auth/forgot-password
  - POST /api/auth/reset-password
  - GET /api/auth/verify-email
  - POST /api/auth/logout
- Session management:
  - GET /api/auth/sessions
- User management:
  - GET /api/auth/users (Super Admin only)

#### Error Handling
- Custom exception classes for specific error scenarios
- Standardized error response format
- Detailed error codes and messages
- Validation error handling
- Global exception handler

#### Validation
- Email format validation
- Password strength requirements
- Input length restrictions
- Role validation
- Session validation

### Changed
- Migrated from Node.js/Express to Java Spring Boot
- Enhanced security measures
- Improved error handling
- Structured response formats

### Security Updates
- Added comprehensive input validation
- Implemented rate limiting
- Enhanced password requirements
- Added session management
- Improved token security

### Dependencies
- Spring Boot Starter Web
- Spring Boot Starter Security
- Spring Boot Starter Data JPA
- Spring Boot Starter Mail
- JJWT (JSON Web Token)
- PostgreSQL Driver
- Lombok
- Validation API
- Apache Commons
- Guava (for rate limiting)

### Configuration
- Application properties for different environments
- Logging configuration
- Email server settings
- Database connection properties
- Security settings
- CORS configuration

### Documentation
- API documentation with detailed request/response formats
- Error code documentation
- Security best practices
- Database schema
- Environment setup guide
- Testing guidelines

## [1.0.1] - Planned
### To Be Added
- OAuth2 integration
- Two-factor authentication
- API key management
- Enhanced audit logging
- Performance monitoring
- Caching layer
- Automated testing suite
- CI/CD pipeline configuration

### To Be Enhanced
- Session management with Redis
- Enhanced rate limiting strategies
- More granular permissions
- Improved error reporting
- Enhanced monitoring capabilities
- Performance optimizations

## [0.1.0] - 2024-12-08
### Added
- Project initialization

## Migration Guide
### From Node.js to Java
- Updated authentication flow
- Modified database schema
- Enhanced security features
- New error handling approach
- Updated API response formats
- Modified environment variables

## Breaking Changes
- Token format and validation
- Error response structure
- Input validation requirements
- API endpoint signatures
- Authentication headers
- Response formats
