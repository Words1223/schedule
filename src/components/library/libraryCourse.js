import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label classsName="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                {/* arrow component */}
                {/* action button component */}
                <div classsName="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor lacinia, luctus leo ultrices, gravida dolor. Aliquam a scelerisque magna, a mollis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vestibulum finibus ipsum. Cras id orci a metus laoreet rhoncus eu ullamcorper nisi. </p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse; 