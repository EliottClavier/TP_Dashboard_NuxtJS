export default function ({ store, redirect }) {
  if (store.state.authenticated || store.state.authenticated === 0) {
    return redirect(`/${store.state.users[store.state.authenticated].name}`)
  }
}
