<template>
    <div style="background-color: transparent; padding: 20px;">
        <a-row :gutter="[48, 16]" style="margin-bottom: 30px">
            <a-col :span="8">
                <div>
                    <a-card class="newscard">
                        <img
                        slot="cover"
                        alt="example"
                        src="../../assets/img/smart_city.jpg"
                        />
                        <a-card-meta title="LibCity v0.1.0 Has Released!">
                        <template slot="description">
                            Today we are announcing ...
                        </template>
                        </a-card-meta>
                    </a-card>
                </div>
            </a-col>
            <!-- <a-col :span="8">
                <div>
                    <a-card class="newscard">
                        <img
                        slot="cover"
                        alt="example"
                        src="https://recbole.io/images/chart.jpeg"
                        />
                        <a-card-meta title="Europe Street beat">
                        <template slot="description">
                            www.instagram.com
                        </template>
                        </a-card-meta>
                    </a-card>
                </div>
            </a-col>
            <a-col :span="8">
                <div>
                    <a-card class="newscard">
                        <img
                        slot="cover"
                        alt="example"
                        src="https://recbole.io/images/chart.jpeg"
                        />
                        <a-card-meta title="Europe Street beat">
                        <template slot="description">
                            www.instagram.com
                        </template>
                        </a-card-meta>
                    </a-card>
                </div>
            </a-col> -->
        </a-row>
    </div>
</template>

<script>
export default {
    name: 'newCard',
    data() {
        return {};
    }
}
</script>

<style>
.newscard {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    height:330px;
}
.newscard:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}
</style>