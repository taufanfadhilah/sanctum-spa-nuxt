export default function ({ $auth, redirect }) {
  // If the user is not authenticated and not admin
  if (!$auth.loggedIn || $auth.user?.role !== 'admin') {
    return redirect('/')
  }
}
