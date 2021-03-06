import React, { Component } from 'react';
import LearningOutcomesService from '../../Services/LearningOutcomesService';

class LearningOutcomes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentid: 1,
            learningOutcomes: [],
            refactoringBar: 0,
            codeQualityBar: 0
        }
        this.handleProgressBar = this.handleProgressBar.bind(this);
    }

    componentDidMount() {
        LearningOutcomesService.getLearningOutcomesByStudentId(this.state.studentid).then((res) => {
            //console.log(res)
            this.setState({ learningOutcomes: res.data });
            this.setState({ refactoringBar: ((this.state.learningOutcomes.refactoring / 5) * 100)})
            console.log(this.state.refactoringBar);
        })
    }

    handleProgressBar(outcome){
        if(outcome == 1){
            return '20%'
        }
        else if(outcome == 2){
            return '40%'
        }
        else if(outcome == 3){
            return '60%'
        }
        else if(outcome == 4){
            return '80%'
        }
        else if(outcome == 5){
            return '100%'
        }
    }

    render() {
        return (
            <div className='container' style={{"marginTop": 50}}>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th colspan="39" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">Learning outcomes</th>
                        </tr>
                        <tr>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>Criteria</th>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">Ratings</th>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>Points</th>
                        </tr>
                        <tr>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>
                                Code Quality
                            </th>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: this.handleProgressBar(this.state.learningOutcomes.codeQuality), backgroundColor: "#663366"}}></div>
                                </div>
                            </th>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>
                                {this.state.learningOutcomes.codeQuality}/5
                            </th>

                        </tr>
                        <tr>
                            <th scope='col'>
                                Refactoring
                            </th>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: this.handleProgressBar(this.state.learningOutcomes.refactoring), backgroundColor: "#e5007d" }}></div>
                                </div>
                            </th>
                            <th colspan="3" class="fwfoD_bGBk fwfoD_fsuY fwfoD_EMjX" scope="col" aria-sort="none" style={{ width: '20%' }}>
                                {this.state.learningOutcomes.refactoring}/5
                            </th>
                        </tr>
                    </thead>

                </table>
            </div>
        );
    }
}

export default LearningOutcomes;