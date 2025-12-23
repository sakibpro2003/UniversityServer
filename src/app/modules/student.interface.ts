export type Student = {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  avatar?: string;
  contactNumber: string;
  bloodGroup: "A+" | "B+" | "O+";
  presentAddress: string;
  parmanentAddress: string;
  gender: "male" | "female";
};
