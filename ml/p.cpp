#include<irrlicht/irrlicht.h>
class nmk
{
public:
	nmk(irr::scene::ISceneManager* d);
	~nmk();
	void k(
		const irr::core::vector3df& s,
		const irr::video::SColor& v,
		const irr::core::vector3df& t
	);
	irr::scene::IMesh* p();
private:
	irr::scene::ISceneManager* D;
	irr::scene::IMeshBuffer* nd;
	irr::scene::SMesh* tp;
	irr::scene::SMeshBuffer* tpj;
	irr::u32 bs;
	irr::u32 ss;
	const irr::video::S3DVertex* bss;
	const irr::u16* bk;
	bool nk = false;
};
nmk::nmk(irr::scene::ISceneManager* d)
	: D(d)
{
	using namespace irr;
	using namespace scene;
	IMesh* g = D->getGeometryCreator()->createCubeMesh(irr::core::vector3df(1,1,1));
	nd = g->getMeshBuffer(0);
	bs = nd->getVertexCount();
	ss = nd->getIndexCount();
	bss = (const video::S3DVertex*)nd->getVertices();
	bk   = nd->getIndices();
	tp = new SMesh();
	tpj = new SMeshBuffer();
	tpj->Material.Lighting = false;
	if(0)g->drop();
}
nmk::~nmk()
{
	tp->drop();
}
void nmk::k(
	const irr::core::vector3df& s,
	const irr::video::SColor& v,
	const irr::core::vector3df& t
)
{
	using namespace irr;
	using namespace scene;
	using namespace core;
	using namespace video;
	if (nk) return;
	matrix4 kk;
	kk.setScale(t);
	kk.setTranslation(s);
	u32 ms = tpj->Vertices.size();
	for (u32 k = 0; k < bs; k++)
	{
		S3DVertex b;
		b.Pos=nd->getPosition(k);
		kk.transformVect(b.Pos);
		b.Color = v;
		tpj->Vertices.push_back(b);
	}
	for (u32 k = 0; k < ss; k++)
		tpj->Indices.push_back(bk[k] + ms);
}
irr::scene::IMesh* nmk::p()
{
	if (!nk)
	{
		nk = true;

		tpj->recalculateBoundingBox();
		tp->addMeshBuffer(tpj);
		tp->recalculateBoundingBox();

		tpj->drop();
	}
	tp->grab();
	return tp;
}
void pk()
{
	irr::IrrlichtDevice *pd=irr::createDevice(irr::video::EDT_OPENGL,irr::core::dimension2du(1024,768),16,false);
	auto d=pd->getSceneManager();
	nmk nm(d);
	nm.k({0,0,0},irr::video::SColor(255,100,100,120),{10,10,10});
	if(1)nm.k({-5,0,0},irr::video::SColor(255,80,80,100),{0.25,12,10});
	if(1)nm.k({5,0,0},irr::video::SColor(255,80,80,100),{0.25,12,10});
	if(1)nm.k({0,0,-5},irr::video::SColor(255,80,80,100),{10,12,0.25});
	if(1)nm.k({0,0,5},irr::video::SColor(255,80,80,100),{10,12,0.25});
	auto b=d->addOctreeSceneNode(nm.p());
	b->setMaterialFlag(irr::video::EMF_LIGHTING,false);
	auto n=d->addCameraSceneNodeFPS(0,100,.002,0,0,0,true,0);
	n->setPosition(irr::core::vector3df(0,1000,0));
	n->setTarget(irr::core::vector3df(0,0,0));
	auto k=pd->getVideoDriver();
	auto p=pd->getGUIEnvironment();
	irr::scene::ITriangleSelector* c;
	c=d->createOctreeTriangleSelector(b->getMesh(),b);
	b->setTriangleSelector(c);
	auto g=d->createCollisionResponseAnimator(c,n,irr::core::vector3df(.2,1,.2),
			irr::core::vector3df(0,-10,0),irr::core::vector3df(0,.75,0));
	n->addAnimator(g);
	g->drop();

	while(pd->run())
	{
		k->beginScene(true,true,0);
		d->drawAll();
		p->drawAll();
		k->endScene();
	}
	pd->drop();
}
int main()
{
	pk();
	return 0;
}
