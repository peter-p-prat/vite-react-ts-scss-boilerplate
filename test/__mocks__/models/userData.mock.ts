export interface UserData {
    email: string;
    name: string;
    dateOfBirth: string;
    password: string;
    confirmPassword: string;
    verificationCode: string;
}

export const userDataMock: UserData = {
    email: "testSuccess@test.com",
    password: "12345678!Aa",
    name: "Test Test",
    dateOfBirth: "1990-01-01",
    confirmPassword: "12345678!Aa",
    verificationCode: "123456",
};
