export default function fetchMockData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock data returned from "API"
      resolve({
        applicationStatus: 4,
        name: "Jane Doe",
        uuid: "000000",
        forms: [
          {
            firstName: "Jane",
            lastName: "Doe",
            email: "jane@doe.com",
            title: "mrs",
            birthDate: "2020-11-02",
            employmentStatus: "employed",
            residencyStatus: "citizen",
            mobileNumber: "(+61) 111-111-111",
            residentalAddress:
              "10 Old South Head Road, Rose Bay, 2029, Australia",
          },
          {
            firstName: "Jane",
            lastName: "Doe",
            email: "jane@doe.com",
            title: "mrs",
            birthDate: "2020-11-02",
            employmentStatus: "employed",
            residencyStatus: "citizen",
            mobileNumber: "(+61) 111-111-111",
            residentalAddress:
              "10 Old South Head Road, Rose Bay, 2029, Australia",
          },
        ],
      });
    }, 1000); // Simulate a 1-second delay
  });
}
