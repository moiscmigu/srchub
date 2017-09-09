  console.log('the tweetCounter',this.state.tweetCounter)

        if(this.state.tweetCounter === 0) {
            console.log('this should only happen once');
            this.setState({
                tweetCounter: this.state.tweetCounter + 1
            })

        } else {
            console.log('this shoud have the tweet', this.props.info);
            let {info} = this.props;
            let tweets = info;
            
            return (
                <div className='tweets-container'>
                    {
                        
                        info.map((task, i) => {
                            console.log('this is the new tweet', task.tweet);
                           return (
                               task.tweet.map((t, j) => {
                                   console.log('this is the second loop', t)
                                   return (
                                       <div key={j}>
                                            <p>{t.text}</p>
                                       </div>
                                   )
                               })
                           );
                        })



                        
                    }
                </div>
            );//end of return
        }