# Ignite-call

A scheduling webpage built using **Next.JS**, **TypeScrip**.

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**
- **npm**

## Getting Started

### 1. Clone repository
```bash
git clone https://github.com/Cassiano26/ignite-call-c2.git
cd ignite-call-c2
```
### 2. Install dependencies
```bash
npm install
```
### 3. run docker mysql database
```bash
sudo docker run --name mysqlignite -e -MYSQL_ROOT_PASSWORD=docker -p 3386:3386 mysql:latest
```
### 4. Prisma migrations
```bash
npx prisma migrate dev
```
### 5. Prisma studio
```bash
npx prisma studio
```
### 6. Start application
```bash
npm run dev
```
## Production app URL
https://ignite-call-c2.vercel.app/

## App images

![Screenshot from 2025-01-21 13-29-22](https://github.com/user-attachments/assets/aec9c17b-2527-4836-a002-1f72e7d1e1f7)
![Screenshot from 2025-01-21 13-29-14](https://github.com/user-attachments/assets/b46c0791-62c9-498f-a1c1-9230aab12c58)
![Screenshot from 2025-01-21 13-27-51](https://github.com/user-attachments/assets/09e36090-e8f7-4b26-a2a2-84a0d7f5b571)
![Screenshot from 2025-01-21 13-27-24](https://github.com/user-attachments/assets/026813a4-ee2c-4c40-936d-f7e5721890fc)
![Screenshot from 2025-01-21 13-37-08](https://github.com/user-attachments/assets/6471bfd2-c17b-4f6e-87d2-16f5bf6a4d95)
