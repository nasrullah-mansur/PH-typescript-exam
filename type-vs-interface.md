# TypeScript এ `type` ও `interface` এ দুটির মাঝে পার্থক্য এবং এর সঠিক ব্যবহার

## ভূমিকা

TypeScript এর সাহায্যে প্রজেক্ট করতে আমাদের `type` এবং `interface` দুটিই ব্যবহার করার প্রয়োজন হয়। এ দুটিই অনাগত `data` এর গঠন বর্ণনা ও নির্ধারণ করতে সাহায্য করে। দেখতে অনেকটা কাছাকাছি হলেও এদের ব্যবহারের ক্ষেত্রে কিছু পার্থক্য রয়েছে। নিচে এ বিষয়ে সংক্ষিপ্ত আলোচনা করা হলো।

## interface

interface মূলত Object এর ভিতরে কী কী Properties বা Methods আছে তার type অর্থাৎ কাঠামো বানাতে সাহায্যে করে। তাছাড়া একই নামে দুইটি interface বানালে কোনো error না দিয়ে বরং Marge করে দেয়। উদাহরণ :

```typescript
interface User {
  name: string;
}

interface User {
  email: string;
}

const user: User = {
  name: "Rakib",
  email: "rakib@example.com",
};
```

## type

type এটি interface এর চেয়ে বেশি শক্তিশালী ও এর নানামূখী ব্যবহার রয়েছে। যেমন: এটি দিয়ে Object এর পাশাপাশি, Union, Tuple, Alias, Intersection এর মত data type ও খুব সহজে তৈরী করা যায়। তবে একই নামে দুইটি type লিখা যায় না। উদাহরণ:

```typescript
type ID = string | number;
type Status = "active" | "inactive" | "pending";
type Result = string | number | boolean;

const userId: ID = "EMP-405";
const accountStatus: Status = "active";

function displayValue(val: Result) {
  console.log(`The value is: ${val}`);
}

type UserInfo = [string, number, boolean];

const user: UserInfo = ["Rakib", 26, true];

type Employee = {
  name: string;
  employeeId: number;
};

type ContactDetails = {
  email: string;
  phone: string;
};

type StaffMember = Employee & ContactDetails;

const staff: StaffMember = {
  name: "Ayesha",
  employeeId: 101,
  phone: "017",
  email: "ayesha@example.com",
};
```

## উপসংহার

"সাধারণত কোনো Object এর কাঠামো বা Class Contract এর জন্য interface ব্যবহার করা ভালো ও সহজ। তবে Union, Tuple, Conditional Type কিংবা অন্যান্য জটিল টাইপ লেখার ক্ষেত্রে type ব্যবহার করাই সবচেয়ে উপযোগী।
