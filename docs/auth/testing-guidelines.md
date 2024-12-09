# Testing Guidelines

## Test Structure

### 1. Unit Tests

#### User Service Tests
```typescript
import { UserService } from '../services/UserService';
import { createTestUser, createTestCompany } from '../test/helpers';

describe('UserService', () => {
  describe('createUser', () => {
    it('should create a user with valid data', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'ValidPass123!',
        firstName: 'Test',
        lastName: 'User'
      };
      
      const user = await UserService.createUser(userData);
      expect(user).toBeDefined();
      expect(user.email).toBe(userData.email);
    });

    it('should throw error for duplicate email', async () => {
      // Test implementation
    });
  });
});
```

#### Auth Service Tests
```typescript
describe('AuthService', () => {
  describe('login', () => {
    it('should return token for valid credentials', async () => {
      // Test implementation
    });

    it('should handle invalid password', async () => {
      // Test implementation
    });

    it('should handle non-existent user', async () => {
      // Test implementation
    });
  });
});
```

### 2. Integration Tests

#### Authentication Flow
```typescript
describe('Authentication Flow', () => {
  it('should complete registration and login flow', async () => {
    // Register
    const registerResponse = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'test@example.com',
        password: 'ValidPass123!',
        firstName: 'Test',
        lastName: 'User'
      });

    expect(registerResponse.status).toBe(200);
    
    // Login
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'ValidPass123!'
      });

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body.token).toBeDefined();
  });
});
```

#### Authorization Flow
```typescript
describe('Authorization Flow', () => {
  it('should enforce role-based access control', async () => {
    // Test implementation for different roles
  });
});
```

### 3. E2E Tests

```typescript
describe('E2E Authentication', () => {
  it('should handle complete user journey', async () => {
    // Registration
    await page.goto('/register');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'ValidPass123!');
    await page.click('button[type="submit"]');
    
    // Verify redirect to dashboard
    await expect(page).toHaveURL('/dashboard');
    
    // Verify authentication persistence
    await page.reload();
    await expect(page).toHaveURL('/dashboard');
  });
});
```

## Test Cases Matrix

### Authentication Test Cases

| Test Case | Description | Expected Result |
|-----------|-------------|-----------------|
| Valid Registration | Register with valid data | User created, token returned |
| Invalid Email | Register with invalid email | Validation error |
| Weak Password | Register with weak password | Validation error |
| Duplicate Email | Register with existing email | Conflict error |
| Valid Login | Login with correct credentials | Token returned |
| Invalid Password | Login with wrong password | Auth error |
| Account Lockout | Multiple failed login attempts | Account locked |

### Authorization Test Cases

| Test Case | Description | Expected Result |
|-----------|-------------|-----------------|
| Super Admin Access | Access all endpoints | Full access granted |
| Company Admin Access | Access company resources | Company-scoped access |
| Team Lead Access | Access team resources | Team-scoped access |
| Invalid Role Access | Access unauthorized resource | Access denied |

## Test Environment Setup

```typescript
// test/setup.ts
import { createConnection } from 'typeorm';
import { clearDatabase } from './helpers';

beforeAll(async () => {
  await createConnection({
    type: 'postgres',
    database: 'creator_labs_test',
    synchronize: true,
    dropSchema: true,
    entities: ['src/entities/**/*.ts'],
  });
});

afterEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await connection.close();
});
```

## Mock Examples

### User Mock
```typescript
export const mockUser = {
  id: '123',
  email: 'test@example.com',
  firstName: 'Test',
  lastName: 'User',
  role: UserRole.TEAM_MEMBER,
  companyId: '456',
  teamId: '789'
};
```

### JWT Mock
```typescript
export const mockJwtPayload = {
  userId: '123',
  email: 'test@example.com',
  role: UserRole.TEAM_MEMBER,
  companyId: '456',
  teamId: '789',
  iat: Date.now(),
  exp: Date.now() + 3600000
};
```

## Best Practices

1. **Isolation**: Each test should be independent
2. **Clean State**: Reset database between tests
3. **Meaningful Assertions**: Test for specific conditions
4. **Error Cases**: Include negative test cases
5. **Coverage**: Aim for high test coverage
6. **Maintenance**: Keep tests up to date with code changes

## Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test auth.test.ts

# Run with coverage
npm test -- --coverage

# Run E2E tests
npm run test:e2e
```
