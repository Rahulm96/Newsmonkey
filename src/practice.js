<div id="scrollableDiv" style={{ height: 300,overflow: 'auto',display: 'flex',flexDirection: 'column-reverse',}}>
    {/*Put the scroll bar always on the bottom*/}
    <InfiniteScroll dataLength={this.state.items.length} next={this.fetchMoreData} style={{ display: 'flex', flexDirection: 'column-reverse' }} inverse={true} hasMore={true} loader={<h4>Loading...</h4>} scrollableTarget="scrollableDiv">
        {this.state.items.map((_, index) => (
            <div style={style} key={index}>
                div - #{index}
            </div>
        ))}
    </InfiniteScroll>
</div>