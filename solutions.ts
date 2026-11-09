
const multiplyValue = (value: number, multiplier: number = 2): number => value * multiplier;





const processInput = (value: string | number | boolean): string | number => {

    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }

    if (typeof value === "number") {
        return value * 10;
    }

    if (typeof value === "boolean") {
        return value === true ? "Active" : "Inactive";
    }

    return "";

}





const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}





const concatenateArrays = <T>(...arrays: T[][]): T[] => arrays.flat();




interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {

    const outputCourses = courses.filter((course: Course): boolean => {
        return course.isPublished && course.students >= minStudents;
    });

    return outputCourses;
}









const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item: T): T[K] => item[key]);
}









class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}








const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        }

        setTimeout((): void => {
            resolve("Access Granted");
        }, 1000);
    });
}






