export const NameUtils = {
    fullName: (person) => {
        let result = '';
        if (person.lastName) {
            result += person.lastName;
        }
        if (person.firstName) {
            if (result) {
                result += ' ';
            }
            result += person.firstName;
        }
        if (person.fathersName) {
            if (result) {
                result += ' ';
            }
            result += person.fathersName;
        }
        return result;
    },

    shortName: (fullName) => {
        if (!fullName) {
            return fullName;
        }
        const parts = fullName.split(' ');
        if (parts.length === 1) {
            return parts[0];
        }
        if (parts.length === 2) {
            return parts[0] + ' ' + parts[1].charAt(0).toUpperCase() + '.';
        }
        return parts[0] + ' '
            + parts[1].charAt(0).toUpperCase() + '.'
            + parts[2].charAt(0).toUpperCase() + '.';
    }
}
