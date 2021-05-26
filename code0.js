gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDPrincipalObjects1= [];
gdjs.New_32sceneCode.GDPrincipalObjects2= [];
gdjs.New_32sceneCode.GDPrincipalObjects3= [];
gdjs.New_32sceneCode.GDTitle2Objects1= [];
gdjs.New_32sceneCode.GDTitle2Objects2= [];
gdjs.New_32sceneCode.GDTitle2Objects3= [];
gdjs.New_32sceneCode.GDTitleObjects1= [];
gdjs.New_32sceneCode.GDTitleObjects2= [];
gdjs.New_32sceneCode.GDTitleObjects3= [];
gdjs.New_32sceneCode.GDFlyingEnemy2Objects1= [];
gdjs.New_32sceneCode.GDFlyingEnemy2Objects2= [];
gdjs.New_32sceneCode.GDFlyingEnemy2Objects3= [];
gdjs.New_32sceneCode.GDFondoObjects1= [];
gdjs.New_32sceneCode.GDFondoObjects2= [];
gdjs.New_32sceneCode.GDFondoObjects3= [];
gdjs.New_32sceneCode.GDWallForRedFloorObjects1= [];
gdjs.New_32sceneCode.GDWallForRedFloorObjects2= [];
gdjs.New_32sceneCode.GDWallForRedFloorObjects3= [];
gdjs.New_32sceneCode.GDSecundarioObjects1= [];
gdjs.New_32sceneCode.GDSecundarioObjects2= [];
gdjs.New_32sceneCode.GDSecundarioObjects3= [];
gdjs.New_32sceneCode.GDTankBullet3Objects1= [];
gdjs.New_32sceneCode.GDTankBullet3Objects2= [];
gdjs.New_32sceneCode.GDTankBullet3Objects3= [];
gdjs.New_32sceneCode.GDFondo2Objects1= [];
gdjs.New_32sceneCode.GDFondo2Objects2= [];
gdjs.New_32sceneCode.GDFondo2Objects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32sceneCode.GDPrincipalObjects1, gdjs.New_32sceneCode.GDPrincipalObjects2);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPrincipalObjects2.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDPrincipalObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPrincipalObjects2[k] = gdjs.New_32sceneCode.GDPrincipalObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPrincipalObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPrincipalObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPrincipalObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPrincipalObjects2[i].setAnimationName("Dle");
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDPrincipalObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPrincipalObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPrincipalObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPrincipalObjects1[k] = gdjs.New_32sceneCode.GDPrincipalObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPrincipalObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPrincipalObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPrincipalObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPrincipalObjects1[i].setAnimationName("Run");
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDFlyingEnemy2Objects1Objects = Hashtable.newFrom({"FlyingEnemy2": gdjs.New_32sceneCode.GDFlyingEnemy2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDWallForRedFloorObjects1Objects = Hashtable.newFrom({"WallForRedFloor": gdjs.New_32sceneCode.GDWallForRedFloorObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDWallForRedFloorObjects1Objects = Hashtable.newFrom({"WallForRedFloor": gdjs.New_32sceneCode.GDWallForRedFloorObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTankBullet3Objects1Objects = Hashtable.newFrom({"TankBullet3": gdjs.New_32sceneCode.GDTankBullet3Objects1});gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Principal"), gdjs.New_32sceneCode.GDPrincipalObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPrincipalObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPrincipalObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPrincipalObjects1[k] = gdjs.New_32sceneCode.GDPrincipalObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPrincipalObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPrincipalObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPrincipalObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPrincipalObjects1[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Principal"), gdjs.New_32sceneCode.GDPrincipalObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPrincipalObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPrincipalObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPrincipalObjects1[k] = gdjs.New_32sceneCode.GDPrincipalObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPrincipalObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Principal"), gdjs.New_32sceneCode.GDPrincipalObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPrincipalObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPrincipalObjects1[i].flipX(true);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Principal"), gdjs.New_32sceneCode.GDPrincipalObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPrincipalObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPrincipalObjects1[i].flipX(false);
}
}}

}


{


{
}

}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy2"), gdjs.New_32sceneCode.GDFlyingEnemy2Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDFlyingEnemy2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyingEnemy2Objects1[i].addForce(0, -(500), 0);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy2"), gdjs.New_32sceneCode.GDFlyingEnemy2Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDFlyingEnemy2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyingEnemy2Objects1[i].addForce(-(500), 0, 0);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy2"), gdjs.New_32sceneCode.GDFlyingEnemy2Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDFlyingEnemy2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyingEnemy2Objects1[i].addForce(0, 500, 0);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy2"), gdjs.New_32sceneCode.GDFlyingEnemy2Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDFlyingEnemy2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyingEnemy2Objects1[i].addForce(500, 0, 0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy2"), gdjs.New_32sceneCode.GDFlyingEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WallForRedFloor"), gdjs.New_32sceneCode.GDWallForRedFloorObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDFlyingEnemy2Objects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDWallForRedFloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDFlyingEnemy2Objects1 */
/* Reuse gdjs.New_32sceneCode.GDWallForRedFloorObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDFlyingEnemy2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyingEnemy2Objects1[i].separateFromObjectsList(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDWallForRedFloorObjects1Objects, false);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Principal"), gdjs.New_32sceneCode.GDPrincipalObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.New_32sceneCode.GDPrincipalObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPrincipalObjects1[0].getPointX("Center")), "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("FlyingEnemy2"), gdjs.New_32sceneCode.GDFlyingEnemy2Objects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.New_32sceneCode.GDFlyingEnemy2Objects1.length !== 0 ? gdjs.New_32sceneCode.GDFlyingEnemy2Objects1[0] : null), 0, 0, 1790, 590, true, "", 0);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Principal"), gdjs.New_32sceneCode.GDPrincipalObjects1);
gdjs.copyArray(runtimeScene.getObjects("TankBullet3"), gdjs.New_32sceneCode.GDTankBullet3Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPrincipalObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPrincipalObjects1[i].getBehavior("FireBullet").Fire((gdjs.New_32sceneCode.GDPrincipalObjects1[i].getPointX("Center")), (gdjs.New_32sceneCode.GDPrincipalObjects1[i].getPointY("Center")), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTankBullet3Objects1Objects, 0, 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDPrincipalObjects1.length = 0;
gdjs.New_32sceneCode.GDPrincipalObjects2.length = 0;
gdjs.New_32sceneCode.GDPrincipalObjects3.length = 0;
gdjs.New_32sceneCode.GDTitle2Objects1.length = 0;
gdjs.New_32sceneCode.GDTitle2Objects2.length = 0;
gdjs.New_32sceneCode.GDTitle2Objects3.length = 0;
gdjs.New_32sceneCode.GDTitleObjects1.length = 0;
gdjs.New_32sceneCode.GDTitleObjects2.length = 0;
gdjs.New_32sceneCode.GDTitleObjects3.length = 0;
gdjs.New_32sceneCode.GDFlyingEnemy2Objects1.length = 0;
gdjs.New_32sceneCode.GDFlyingEnemy2Objects2.length = 0;
gdjs.New_32sceneCode.GDFlyingEnemy2Objects3.length = 0;
gdjs.New_32sceneCode.GDFondoObjects1.length = 0;
gdjs.New_32sceneCode.GDFondoObjects2.length = 0;
gdjs.New_32sceneCode.GDFondoObjects3.length = 0;
gdjs.New_32sceneCode.GDWallForRedFloorObjects1.length = 0;
gdjs.New_32sceneCode.GDWallForRedFloorObjects2.length = 0;
gdjs.New_32sceneCode.GDWallForRedFloorObjects3.length = 0;
gdjs.New_32sceneCode.GDSecundarioObjects1.length = 0;
gdjs.New_32sceneCode.GDSecundarioObjects2.length = 0;
gdjs.New_32sceneCode.GDSecundarioObjects3.length = 0;
gdjs.New_32sceneCode.GDTankBullet3Objects1.length = 0;
gdjs.New_32sceneCode.GDTankBullet3Objects2.length = 0;
gdjs.New_32sceneCode.GDTankBullet3Objects3.length = 0;
gdjs.New_32sceneCode.GDFondo2Objects1.length = 0;
gdjs.New_32sceneCode.GDFondo2Objects2.length = 0;
gdjs.New_32sceneCode.GDFondo2Objects3.length = 0;

gdjs.New_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
