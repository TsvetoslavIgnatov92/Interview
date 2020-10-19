import { connect } from 'react-redux';
import { InitComponent } from '@modules/init/components/init.component';
import * as mainActions from './actions/init.actions';

export const mapStateToProps = (state: any): any => {
    return {
        users: state.initState.users,
        posts: state.initState.posts
    };
};

export const mapDispatchToProps: any = {
    fetchUsers: mainActions.fetchUsers,
    fetchPosts: mainActions.fetchPosts,
    handleChange: mainActions.handleChange,
    setIsPostShown: mainActions.setIsPostShown
};

export default connect(mapStateToProps, mapDispatchToProps)(InitComponent);
