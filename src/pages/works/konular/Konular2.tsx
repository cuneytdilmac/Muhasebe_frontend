

interface User {
    name: string;
    phoneNumber: string;
}

interface Person {
    id: number;
}

interface Customer {
    name: string;
    phoneNumber: number;
    email: string;
}

interface Project {
    id: number;
    name: string;
    email: string;
}

export const Konular2 = () => {
    // İnterface kullanımı
    const name: string = "cüneyt";
    const phoneNumber: string = "6251151515";
    console.log(name + phoneNumber);
    const user1: User = { name: "cüneyt", phoneNumber: "123644567" };
    const user2: User = { name: "selçuk", phoneNumber: "6123644567" };
    console.log(user1);
    console.log(user2);
    console.log(user1.name);
    console.log(user2.phoneNumber);
    const person1: Person = { id: 100 };
    console.log(person1);
    const customer1: Customer = { name: "ali", phoneNumber: 1234455, email: "asdfgh" };
    console.log(person1.id + customer1.phoneNumber);
    const value1: number = person1.id + customer1.phoneNumber;
    console.log(value1);
    const project1: Project = { name: "34521", id: 123465, email: "cünfdlff" };
    console.log(project1.name);
    
    return (
        <h1>Konular2</h1>
    )
}