import { Child } from "./Child"

export const Parent = () => {
    const value: string = "Cüneyt";
    const value2: number = 100;
    const value3: number = 45;
    const value4: number = 500;
    const value5: number = 600;

    //Parent'tan iki tane veri yolla value4 ve value5 olsun
    //tipleri number value4 = 500 value5 600 olsun bunları child
    //içerinde topla console 'a bas.

    return (
        <div>
            <h1>Parent componenti</h1>
            <Child
                data={value}
                data2={value2}
                data3={value3}
                data4={value4}
                data5={value5}
            ></Child>
        </div>
    )
}