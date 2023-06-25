export const NameUtils = {
    short: (fullName) => {
        if (!fullName) {
            return fullName;
        }
        if (!fullName.trim()) {
            return fullName;
        }

        const parts = fullName.split(' ');

        if (parts.length < 2) {
            return fullName;
        }

        let result = '';
        if (parts.length > 1) {
            result += parts[0] + ' ' + parts[1].charAt(0) + '.';
        }

        if (parts.length > 2) {
            result += parts[2].charAt(0) + '.';
        }

        return result;
    },

    splitFullName: (fullName) => {
        if (!fullName) {
            return fullName;
        }

        return fullName.split(' ');
    },

    fullName: (patient) => {
        if (!patient) {
            return patient;
        }
        let result = '';
        if (patient.lastName) {
            result += patient.lastName;
        }
        if (patient.firstName) {
            if (result) {
                result += ' ';
            }
            result += patient.firstName;
        }
        if (patient.fathersName) {
            if (result) {
                result += ' ';
            }
            result += patient.fathersName;
        }
        return result;
    }
}
