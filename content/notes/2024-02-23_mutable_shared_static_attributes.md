---
title: "Mutable shared static attributes in Javascript"
alias: "mutable-shared-static-attributes"
date: 2024-02-23
publishdate: 2024-02-23
draft: false
categories: 
- Notes
tags:
- frontend
- JS
- TIL
---

My understanding of the `static` keyword in JS classes has always been that it determined immutable attributes/methods that are available before not on a class instance but on the class constructor itself. Like with the `Object` class constrctor: it is possible to instantiate it, but some methods are available on the constructor too, like `.fromEntries()`.

Let's see a working example:

```js
class MyClass {
    static attr1 = 'attr1'
    attr2 = 'attr2'

    static method1() { return 'method1' }

    method2() { return 'method2' }
}

console.group('Constructor')
console.log(MyClass.attr1)
console.log(MyClass.attr2) // <- doesn't throw, but undefined
console.log(MyClass.method1())
console.log(MyClass.method2()) // <- throws
console.groupEnd()

const instance = new MyClass()
console.group('Instance')
console.log(instance.attr1) // <- doesn't throw, but undefined
console.log(instance.attr2)
console.log(instance.method1()) // <- throws
console.log(instance.method2())
console.groupEnd()
```

As you can see, static method are available on the constructor only, while "normal" method only on instances. So far so good.

What I didn't know is that static attributes are mutable. Which means we can change the value at runtime for all the instances!

Let's extend the previous script with these instructions:
```js
MyClass.attr1 = 'attr1 - updated'
console.log(MyClass.attr1) // <-- outputs "attr1 - updated"
```

This, alone, isn't super-helpful. However, combined with the fact that static methods can be used inside class instances, it allows some tricky effects. It is technically possible to perform a computation insine a class instance only one time, and then allow all the next instances to benefit from that.

I explain myself better through code:
```js
class MyClass2 {
    static cached = null

    someMethod() {
        if (MyClass2.cached === null) {
            console.log('doing some expensive computation...') 
            MyClass2.cached = 42
        }
        return MyClass2.cached
    }
}

const instance1 = new MyClass2()
console.log(instance1.someMethod()) // <-- doing expensive computation only first time for same class
console.log(instance1.someMethod())
const instance2 = new MyClass2()
console.log(instance2.someMethod()) // <-- but also for other instances of the same class!!
```

This is a way to obtain an encapsulated common ground among all the instances of a class. 

I think it's a trick it might be useful to know, but I don't like that: I consider this somewhat "dirty" as static methods should be used only for a class utils or different kind of constructors (like `.fromEntries()`). But nice to know.   

