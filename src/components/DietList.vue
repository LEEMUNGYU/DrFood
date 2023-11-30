<template>
    <FoodyHeader link='FoodyHeader.vue' />
    <div class="container">
    <h3>식단추천</h3>
    <hr id="frist_line">
        <div class="diet_list_box">
            <div id="mealtime_box">
                <div class='mealTime' id="mor">아침</div>
                <div class='mealTime'  id="lun">점심</div>
                <div class='mealTime'  id="din">저녁</div>
            </div>
            <div class="list_bd">
                <div class="list_el">
                    <div id="el">{{ a }}</div>
                    <div id="el">{{ a }}</div>
                    <div id="el">{{ a }}</div>
                    <div id="el">{{ a }}</div>
                    <div id="el">{{ a }}</div>
                </div>
                <div>
                    <div id="tot_text">총 영양성분</div>
                    <hr id="second_line">
                    <div id="el_name">
                        <div>열량<br>(kcal)<br><p>1{{ a }}</p></div>
                        <div>탄수화물<br>(g)<br><p>1{{ a }}</p></div>
                        <div>단백질<br>(g)<br><p>1{{ a }}</p></div>
                        <div>지방<br>(g)<br><p>1{{ a }}</p></div>
                        <div>콜레스테롤<br>(mg)<br><p>1{{ a }}</p></div>
                        <div>나트륨<br>(mg)<br><p>1{{ a }}</p></div>
                    </div>
                    <div id="notice">*식품을 누르면 각 식품별 영양성분을 확인하실 수 있습니다.</div>
                    <div id="two_btn">
                        <div id="reason">구성이유</div>
                        <div id="reroll">식단 재추천</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="diet_list_box">
            <div id="mealtime_box">
                <div class='mealTime' id="mor">아침</div>
                <div class='mealTime' id="lun">점심</div>
                <div class='mealTime' id="din">저녁</div>
            </div>
            <div class="list_bd">
                <div class="list_el">
                    <div id="el">{{ a }}</div>
                    <div id="el">{{ a }}</div>
                    <div id="el">{{ a }}</div>
                    <div id="el">{{ a }}</div>
                    <div id="el">{{ a }}</div>
                </div>
                <div>
                    <div id="tot_text">총 영양성분</div>
                    <hr id="second_line">
                    <div id="el_name">
                        <div>열량<br>(kcal)<br><p>1{{ a }}</p></div>
                        <div>탄수화물<br>(g)<br><p>1{{ a }}</p></div>
                        <div>단백질<br>(g)<br><p>1{{ a }}</p></div>
                        <div>지방<br>(g)<br><p>1{{ a }}</p></div>
                        <div>콜레스테롤<br>(mg)<br><p>1{{ a }}</p></div>
                        <div>나트륨<br>(mg)<br><p>1{{ a }}</p></div>
                    </div>
                    <div id="notice">*식품을 누르면 각 식품별 영양성분을 확인하실 수 있습니다.</div>
                    <div id="two_btn">
                        <div id="reason">구성이유</div>
                        <div id="reroll">식단 재추천</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="diet_list_box">
            <div id="mealtime_box">
                <div class='mealTime' id="mor">아침</div>
                <div class='mealTime' id="lun">점심</div>
                <div class='mealTime' id="din">저녁</div>
            </div>
            <div class="list_bd">
                <div class="list_el">
                    <div id="el">{{ a }}</div>
                    <div id="el">{{ a }}</div>
                    <div id="el">{{ a }}</div>
                    <div id="el">{{ a }}</div>
                    <div id="el">{{ a }}</div>
                </div>
                <div>
                    <div id="tot_text">총 영양성분</div>
                    <hr id="second_line">
                    <div id="el_name">
                        <div>열량<br>(kcal)<br><p>1{{ a }}</p></div>
                        <div>탄수화물<br>(g)<br><p>1{{ a }}</p></div>
                        <div>단백질<br>(g)<br><p>1{{ a }}</p></div>
                        <div>지방<br>(g)<br><p>1{{ a }}</p></div>
                        <div>콜레스테롤<br>(mg)<br><p>1{{ a }}</p></div>
                        <div>나트륨<br>(mg)<br><p>1{{ a }}</p></div>
                    </div>
                    <div id="notice">*식품을 누르면 각 식품별 영양성분을 확인하실 수 있습니다.</div>
                    <div id="two_btn">
                        <div id="reason">구성이유</div>
                        <div id="reroll">식단 재추천</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FoodyNav link='FoodyNav.vue' />
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';
import FoodyNav from '@/layout/FoodyNav.vue';

export default {
    name: 'DietList',
    data() {
      return {
      };
    },
    methods: {
    },
    props: {
        msg: String
    },
    components: { FoodyHeader, FoodyNav },

}
</script>

<style>

h3{
    text-align: left;
    margin-left: 3%;
    margin-top: 8%;
}

#frist_line{
    border: solid 0.4vh;
    color:#3F72AF;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin: 3%
}

.container{
    overflow:scroll;
    width:100vw;
    height:80vh;
    padding-bottom:5%;
}

#mealtime_box{
    display: flex;
    justify-content: center;
    margin-top:4%;
}

#mealtime_box .mealTime{
    font-weight: bold;
    box-sizing: border-box;
    position: relative;
    width: 26.5vw;
    height: 5vh;
    line-height: 5vh;
    background: #DBE2EF;
    border: 0.2px solid #3F72AF;
    border-radius: 14px 14px 0px 0px;
}
.timeClicked {
    color: #FFFFFF;
    background: #001335;
    border: 0.2px solid #001335;
}

.list_bd{
    display:flex;
    flex-direction: column;
    justify-items: center;
    justify-content: top;
    padding: 3%;
    box-sizing: border-box;
    position:relative; 
    width: 79.5vw;
    height: 30vh;
    background: #DBE2EF;
    border: 0.2px solid #3F72AF;
    border-radius: 0px 0px 14px 14px;
    margin:auto;
}

.list_el{
    display: flex;
    justify-content: center;
    gap:2%;
}
.list_el #el{
    width: 13.6vw;
    height: 2.5vh;
    background: #001335;
    border-radius: 4px;
    color: #FFFFFF;
}

#tot_text{
    color: #3F72AF;
    font-weight: bold;
    text-align: left;
    margin-top:4%;
}

#second_line{
    border: solid 0.25vh;
    color:#3F72AF;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin-top:0;
}

#el_name{
    font-size:0.65rem;
    font-weight: bold;
    display:flex;
    justify-content: center;
    gap:4%;
}

#notice{
    font-size:0.5rem;
    font-weight: bold;
    display:flex;
    justify-content:right;
    margin-top:3%;
}

#two_btn{
    display:flex;
    justify-content: center;
    margin-top:4%;
    gap:45%;
}
#reason{
    color:#fff;
    font-size:0.6rem;
    font-weight: bold;
    width: 20vw;
    height: 2.5vh;
    line-height: 2.5vh;
    background: #3F72AF;
    border-radius: 4px;
}

#reroll{
    color:#fff;
    font-size:0.6rem;
    font-weight: bold;
    width: 20vw;
    height: 2.5vh;
    line-height: 2.5vh;
    background: #3F72AF;
    border-radius: 4px;
}
</style>