export default function ({ redirect, $auth }) {
    console.log($auth.loggedIn)
    if (!$auth.loggedIn) {
        return
    }
    return redirect(`/students/in/${$auth.user.id}`)
}