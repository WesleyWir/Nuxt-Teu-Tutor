export default async function ({ redirect, $auth }) {
    if ($auth.$state.strategy != 'local_educator') {
        return redirect('/students/in/profile')
    }
}