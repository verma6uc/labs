# API Endpoints Documentation

## Authentication Endpoints

### 1. Registration
```typescript
POST /api/auth/register
Content-Type: application/json

Request:
{
  "email": string,
  "password": string,
  "firstName": string,
  "lastName": string,
  "companyName": string,     // Optional, for company registration
  "inviteCode": string       // Optional, for team invitation
}

Response:
{
  "user": {
    "id": string,
    "email": string,
    "firstName": string,
    "lastName": string,
    "role": UserRole,
    "companyId": string,
    "teamId": string
  },
  "token": string
}
```

### 2. Login
```typescript
POST /api/auth/login
Content-Type: application/json

Request:
{
  "email": string,
  "password": string
}

Response:
{
  "token": string,
  "user": UserObject
}
```

### 3. Password Reset
```typescript
POST /api/auth/forgot-password
Content-Type: application/json

Request:
{
  "email": string
}

Response:
{
  "message": string
}

POST /api/auth/reset-password
Content-Type: application/json

Request:
{
  "token": string,
  "newPassword": string
}

Response:
{
  "message": string
}
```

### 4. Session Management
```typescript
GET /api/auth/sessions
Authorization: Bearer <token>

Response:
{
  "sessions": [
    {
      "id": string,
      "device": string,
      "ipAddress": string,
      "lastActive": string,
      "isCurrentSession": boolean
    }
  ]
}

DELETE /api/auth/sessions/:sessionId
Authorization: Bearer <token>

Response:
{
  "message": string
}
```

## User Management Endpoints

### 1. User Profile
```typescript
GET /api/users/me
Authorization: Bearer <token>

Response:
{
  "user": UserObject
}

PATCH /api/users/me
Authorization: Bearer <token>

Request:
{
  "firstName": string,
  "lastName": string,
  "email": string
}

Response:
{
  "user": UserObject
}
```

### 2. Team Management
```typescript
POST /api/teams/invite
Authorization: Bearer <token>

Request:
{
  "email": string,
  "role": UserRole
}

Response:
{
  "invite": {
    "id": string,
    "code": string,
    "email": string,
    "expiresAt": string
  }
}
```

## Error Responses

### Common Error Structure
```typescript
{
  "error": {
    "code": string,
    "message": string,
    "details": object | null
  }
}
```

### Error Codes
- `AUTH001`: Invalid credentials
- `AUTH002`: Account locked
- `AUTH003`: Token expired
- `AUTH004`: Invalid token
- `AUTH005`: Email already exists
- `AUTH006`: Invalid password format
- `AUTH007`: Invalid invite code
- `AUTH008`: Insufficient permissions

## Testing Guidelines

### 1. Authentication Tests
```typescript
describe('Authentication', () => {
  it('should register a new user', async () => {
    // Test implementation
  });

  it('should login with valid credentials', async () => {
    // Test implementation
  });

  it('should handle invalid login attempts', async () => {
    // Test implementation
  });
});
```

### 2. Authorization Tests
```typescript
describe('Authorization', () => {
  it('should restrict access based on user role', async () => {
    // Test implementation
  });

  it('should handle permission inheritance', async () => {
    // Test implementation
  });
});
```
