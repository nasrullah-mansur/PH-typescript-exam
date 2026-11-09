# TypeScript OOP তে Access Modifiers ও `readonly` এর ব্যবহার

## ভূমিকা

Object-Oriented Programming এ একটি class এর কোন তথ্য কোথা থেকে ব্যবহার বা পরিবর্তন করা যাবে, তা নিয়ন্ত্রণ করা গুরুত্বপূর্ণ। `public`, `private`, `protected` এই access modifiers এবং `readonly` modifier ব্যবহার করলে এই নিয়ন্ত্রণ এর বিষয়টি স্পষ্ট ভাবে বোঝা যায়। অর্থাৎ এতে class এর কোনো তথ্য ব্যবহারের সীমাবদ্ধতা বোঝা সহজ হয়।

## বিস্তারিত আলোচনা

`public`: এটি default modifier এবং এটি ব্যবহার করলে property বা method কোডের যেকোনো জায়গা থেকে (যেমন, ক্লাসের ভেতর, বাইরে বা চাইল্ড ক্লাসে) অ্যাক্সেস নেয়া বা পরিবর্তন করা যায়।

`private`: শুধু নির্দিষ্ট ওই ক্লাসের ভেতর থেকেই এটি ব্যবহার করা যায় Class এর বাইরে থেকে এমনকি Child Class থেকেও এটি ব্যবহার করা যায় না।

`protected`: নিজের Class এবং এর থেকে যে Child Class হয় উভয়ে যায়গাতেই এটি ব্যবহার করা যায়, তবে ক্লাসের বাইরে থেকে সরাসরি ব্যবহার করা যায় না।

`readonly`: এটি মূলত data কে protect করার জন্য ব্যবহৃত হয়। এটি ব্যবহার করলে একবার কোনো প্রপার্টিতে মান Initialize করা হয়ে গেলে, পরবর্তীতে সেই মান আর পরিবর্তন করা যায় না।

## উদাহরণ

```typescript
class Person {
  readonly id: number = 1;
  public name: string = "Nasrullah";
  private salary: int = 20000;
  protected role: string = "Developer";
}
```

## উপসংহার

পরিশেষে বলা যায়, `public, private, protected` এবং `readonly` এর মতো Access Modifiers একটি `Class` এর অভ্যন্তরীণ `data` সুরক্ষা নিশ্চিত করতে এবং ভিতরের `properties` ও `methods` এর ব্যবহার সঠিকভাবে নিয়ন্ত্রণ করতে অত্যন্ত কার্যকরী। প্রজেক্টে এগুলোর সঠিক ব্যবহার করলে অনিচ্ছাকৃত পরিবর্তনকে রোধ করে, এবং ক্লাসকে করে তোলে আরও বেশি নিরাপদ, শৃঙ্খল ও রক্ষণাবেক্ষণযোগ্য।
