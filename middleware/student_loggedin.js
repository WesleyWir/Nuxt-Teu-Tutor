export default async function ({ redirect, $auth }) {
    if ($auth.loggedIn && $auth.$state.strategy == 'local_student') {
        return redirect('/students/in/profile')
    }
}