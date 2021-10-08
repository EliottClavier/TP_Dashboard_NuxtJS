export default function ({store, redirect, app}) {
  const authenticated = app.$cookies.get('authenticated')
  if (authenticated || authenticated === 0) {
    return redirect('/dashboard')
  }
}
