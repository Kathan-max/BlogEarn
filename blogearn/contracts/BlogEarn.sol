// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract BlogEarn {
    struct Blog{
        address owner;
        string title;
        string description;
        string[] tags;
        uint256 amountCollected;
        string image;
        uint256 upVotes;
        uint256 totClickCounts;
        string[] linksadd;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Blog) public blogs;

    uint256 public numberOfBlogs = 0;

    function createBlog(address _owner, string memory _title, string memory _description, string[] memory _tags, string memory _image, string[] memory _linksadd) public returns (uint256) {
        // Campaign storage campaign = campaigns[numberOfCampaigns];
        Blog storage blog = blogs[numberOfBlogs];
        blog.owner = _owner;
        blog.title = _title;
        blog.description = _description;
        blog.tags = _tags;
        blog.image = _image;
        blog.linksadd = _linksadd;

        numberOfBlogs++;
        return numberOfBlogs - 1;
    }

    function donateToBlog(uint256 _id) public payable {
        uint256 amount = msg.value;

        Blog storage blog = blogs[_id];
        blog.donators.push(msg.sender);
        blog.donations.push(amount);
        
        (bool sent,) = payable(blog.owner).call{value: amount}("");

        if(sent){
            blog.amountCollected = blog.amountCollected + amount;
        }
    }

    function payTheBlog(uint256 _id) public payable{
        uint256 amount = msg.value;

        Blog storage blog = blogs[_id];
        blog.donators.push(msg.sender);
        blog.donations.push(amount);
        (bool sent,) = payable(blog.owner).call{value: amount}("");

        if(sent){
            blog.amountCollected = blog.amountCollected + amount;
        }
    }
    function getDonators(uint256 _id) view public returns(address[] memory,uint256[] memory){
        return(blogs[_id].donators,blogs[_id].donations);
    }

    function getBlog() public view returns (Blog[] memory) {
        Blog[] memory allBlogs = new Blog[](numberOfBlogs);

        for(uint i = 0;i<numberOfBlogs;i++){
            Blog storage item = blogs[i];
            allBlogs[i] = item;
        }

        return allBlogs;
    }
}