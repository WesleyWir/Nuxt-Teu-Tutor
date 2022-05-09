export default async function ({ redirect, $auth }) {
    if ($auth.$state.strategy != 'local_student') {
        return redirect('/educators/in/profile')
    }
}