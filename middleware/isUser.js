export default function ({ $auth, redirect }) {
  if (!$auth.loggedIn || $auth.user?.role !== 'user') {
    return redirect('/')
  }
}
