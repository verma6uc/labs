# Authorization System

## Role-Based Access Control (RBAC)

### User Roles
1. **Super Admin**
   - Full system access
   - Can manage all companies and users
   - Can configure system settings

2. **Company Admin**
   - Manage company settings
   - Create/manage teams
   - Manage company users
   - View company analytics

3. **Team Lead**
   - Manage team members
   - Assign tasks
   - View team analytics
   - Manage team solutions

4. **Team Member**
   - Access assigned solutions
   - Create and edit features
   - View team dashboard

### Permission Matrix

| Permission                | Super Admin | Company Admin | Team Lead | Team Member |
|--------------------------|-------------|---------------|-----------|-------------|
| Manage System Settings   | ✓           | ✗             | ✗         | ✗           |
| Manage Companies         | ✓           | ✗             | ✗         | ✗           |
| Manage Company Settings  | ✓           | ✓             | ✗         | ✗           |
| Manage Teams            | ✓           | ✓             | ✗         | ✗           |
| Manage Team Members     | ✓           | ✓             | ✓         | ✗           |
| Manage Solutions        | ✓           | ✓             | ✓         | ✗           |
| Edit Solutions          | ✓           | ✓             | ✓         | ✓           |
| View Analytics          | ✓           | ✓             | ✓         | ✓           |

## Implementation

### Permission Checking
```typescript
// Middleware for checking permissions
export const checkPermission = (requiredPermission: Permission) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const hasPermission = await AuthService.hasPermission(user, requiredPermission);
    
    if (!hasPermission) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
};
```

### Role Hierarchy
```typescript
const roleHierarchy = {
  SUPER_ADMIN: ['COMPANY_ADMIN', 'TEAM_LEAD', 'TEAM_MEMBER'],
  COMPANY_ADMIN: ['TEAM_LEAD', 'TEAM_MEMBER'],
  TEAM_LEAD: ['TEAM_MEMBER'],
  TEAM_MEMBER: []
};
```

## Test Cases

### Role-Based Access Tests
1. Super Admin access to all endpoints
2. Company Admin restricted to company scope
3. Team Lead restricted to team scope
4. Team Member restricted to assigned solutions

### Permission Tests
1. Create/Edit/Delete operations per role
2. View operations per role
3. Settings access per role
4. Analytics access per role

### Scope Tests
1. Company data isolation
2. Team data isolation
3. User data isolation
4. Cross-company access prevention

### Edge Cases
1. Role change handling
2. Permission inheritance
3. Concurrent access handling
4. Session invalidation on role change
