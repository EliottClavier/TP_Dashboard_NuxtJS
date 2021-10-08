export default function ({ store, redirect, app }) {
  const authenticated = app.$cookies.get('authenticated')
  console.log(authenticated)
  if (!authenticated && !(authenticated === 0)) {
    return redirect('/login')
  }
}
