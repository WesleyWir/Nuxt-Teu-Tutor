export default async function ({ redirect, $auth }) {
    if ($auth.loggedIn && $auth.$state.strategy == 'local_educator') {
        return redirect('/educators/in/profile')
    }
}