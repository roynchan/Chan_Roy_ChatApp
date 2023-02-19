export default {
    name: 'TheUserInsertComponent',
    props: ['insert'],

    template: `
    <article id="chat-insert">
    <h2>{{ insert.currentlytyping.name }}: is typing ... </h2>
 
    </article>
    `,

    data() {
        return {
            message: 'hello from the template',
            // every time an incoming message arrives, check against the user Id to see if this is ours.
            // if it IS, apply a CSS class to indicate that it's ours
            // if it ISN'T, apply a different CSS class to make that obvious
            matchedID: this.$parent.socketID == this.insert.currentlytyping.id
        }
    }
}