describe("The text box",function(){

    it("should display the amout cost per box",function(){

        const passednumber = apple()
        assert.equal(55,passednumber.cost1(55) )




    });
    it("should display the number of Apple in the box",function(){

        const passednumber = apple()
        assert.equal(55,passednumber.ApplesInTheBox(55) )




    });
    it("should display how many apples she wants to sell",function(){

        const passednumber = apple()
        assert.equal(55,passednumber.packet(55) )




    });
    it("shoud desplay the pasantage of profit expected  ",function(){

        const passednumber = apple()
        assert.equal(55,passednumber.profitExpected(55) )




    });
    it("shoud desplay cost per apple   ",function(){

        const passednumber = apple()
        assert.equal(0.5555555555555556,passednumber.costPerApple(50,90) )




    });
    it("shoud desplay packet cost   ",function(){

        const passednumber = apple()
        assert.equal(3.3333333333333335,passednumber.costPricePerapple(50,15) )




    });
    it("shoud desplay number of packet that can come from each box   ",function(){

        const passednumber = apple()
        assert.equal(10,passednumber.numberOfPackets(50,5) )




    });


});

