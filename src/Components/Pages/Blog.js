import React from 'react';

const Blog = () => {
    return (
        <div className='my-10'>
            <div class="collapse my-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <p className='text-xl text-primary'>There are five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:
                    </p>
                    <li>Keeping component state local where necessary</li>
                    <li>Memoizing React components to prevent unnecessary re-renders</li>
                    <li>Code-splitting in React using dynamic import()</li>
                    <li>Windowing or list virtualization in React</li>
                    <li>Lazy loading images in React</li>
                </div>
            </div>
            <div class="collapse my-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <p className='text-xl text-primary'>There are four main types of state you need to properly manage in your React apps:</p>
                    <li><span className='text-xl font-bold'>Local state</span>  Local state is data we manage in one or another component.</li>
                    <li><span className='text-xl font-bold'>Global state </span> Global state is data we manage across multiple components.</li>
                    <li><span className='text-xl font-bold'>Server state </span>  Data that comes from an external server that must be integrated with our UI state.</li>
                    <li><span className='text-xl font-bold'>URL state </span>  Data that exists on our URLs, including the pathname and query parameters.</li>
                </div>
            </div>
            <div class="collapse my-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                </div>
            </div>
            <div class="collapse my-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    Why do I need to use React useState or state management?
                </div>
                <div class="collapse-content">
                    <p className='mb-5'>React applications are built using components and they manage their state internally and it works well for applications with few components, but when the application grows bigger, the complexity of managing states shared across components becomes difficult.</p>
                    <p className='mb-5'>Here is a simple example of an e-commerce application, in which the status of multiple components will change when purchasing a product.</p>

                    <li>Add that product to the shopping list</li>
                    <li>Add product to customer history</li>
                    <li>trigger count of purchased products</li>
                    <li>If developers do not have scalability in mind then it is really hard to find out what is happening when something goes If developers do not have scalability in mind then it is really hard to find out what is happening when something goes </li>
                </div>
            </div>
            <div class="collapse my-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div class="collapse-content">
                    <p className='mb-5'>I will find product from array by name searching Using includes()
                        The includes() method returns either a true or a false if a value exists in an array or not</p>
                    <p className='text-success text-2xl font-bold'>arr.includes(valueToFind[, fromIndex]); </p>
                    <p className='mb-5'>its a basic syntax . The first parameter, valueToFind, is the value to match in the array. The second parameter, fromIndex, is optional and sets the index from which to begin comparisons. The default is 0, so the entire array is searched.</p>

                    <h2>Code Example &gt; &gt; &gt; &gt;</h2>
                    <p className='text-success text-2xl font-bold'>const alligatorFacts = ["thick scales", 80, "4 foot tail", "rounded snout", 80]; <br></br>
                        alligatorFacts.includes("thick scales");
                    </p>
                    <p>This code would return true, because the string exists in the array.</p>
                </div>
            </div>


            <div class="collapse my-5 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />

                <div class="collapse-title text-xl font-medium">
                    What is a unit test?  Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p className='mb-5'>
                        What is a unit test?</p>
                    <p className='mb-5'>

                        Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                    </p>

                    ========================================================================================
                    <p className='mb-5'>
                        Why should write unit tests?</p>
                    <p className='mb-5'>

                        Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;