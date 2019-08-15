import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
    firstName: '',
    lastName: '',
    fullName: computed('firstName,lastName', () => {
        return `${this.firstName},${this.lastName}`;
    })
})